'use client'

import { useState, useEffect, useRef } from "react"


export default function Page() {

    const gravity = 1
    const floor = 400

    const [xPos, setXPos] = useState<number>(0)
    const [yPos, setYPos] = useState<number>(0)

    const yVelocity = useRef(0)

    const holdingUp = useRef(false)
    const holdingLeft = useRef(false)
    const holdingDown = useRef(false)
    const holdingRight = useRef(false)


    useEffect(() => {
        const tick = setInterval(() => {

            if (holdingUp.current) setYPos(prev => prev - 5)
            if (holdingLeft.current) setXPos(prev => prev - 5)
            if (holdingDown.current) setYPos(prev => prev + 5)
            if (holdingRight.current) setXPos(prev => prev + 5)

            yVelocity.current += gravity
            let newY = yPos + yVelocity.current

            if (newY > floor) {
                newY = floor
                yVelocity.current = 0
            }

            setYPos(newY)

        }, 16)

        return () => clearInterval(tick)
    }, [yPos])


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toUpperCase()

            if (key === 'W') holdingUp.current = true
            if (key === 'A') holdingLeft.current = true
            if (key === 'S') holdingDown.current = true
            if (key === 'D') holdingRight.current = true
        }

        const handleKeyUp = (event: KeyboardEvent) => {
            const key = event.key.toUpperCase()

            if (key === 'W') holdingUp.current = false
            if (key === 'A') holdingLeft.current = false
            if (key === 'S') holdingDown.current = false
            if (key === 'D') holdingRight.current = false
        }

        const handleJump = (event: KeyboardEvent) => {
            const key = event.key.toUpperCase()
            console.log(key)

            if (key === 'W' && yPos >= floor - 10) {
                yVelocity.current = -15
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        document.addEventListener('keydown', handleJump)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)

            document.removeEventListener('keydown', handleJump)
        }
    }, [])



    return (
        <div className="relative h-[500px]">

            <svg className="absolute" style={{ left: xPos, top: yPos }} width="50" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="50" height="100" fill="white" />
            </svg>


        </div>
    )
}