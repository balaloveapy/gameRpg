'use client'
import React, { useEffect, useRef, useState } from "react";
import { Father } from "./page.styled";
import { mapSpots } from "./mapSpots";

export default function Home() {
  const divRefs = useRef<Array<Array<HTMLDivElement>>>(
    Array.from({ length: mapSpots.length }, () => [])
  );
  const [move, setMove] = useState('0');

  function handleKeyPress(event: KeyboardEvent) {
    const time = setTimeout(() => {
      var stop = false
      switch (event.key) {
        case 'w': {
          for (let i in mapSpots) {
            for (let a in mapSpots[i]) {
              if (divRefs.current[i][a]?.innerHTML === '<div class="persona"><img src="./char.png"></div>' && mapSpots[+i - 1][a] === 1) {
                console.log(divRefs.current[+i - 1][a])
                divRefs.current[i][a].innerHTML = ''
                divRefs.current[(+i) - 1][a].innerHTML = '<div class="persona"><img src="./char.png"/></div>'
                stop = true
                break;
              }
            }
          }
          setMove('-90px')
          break;

        }
        case 's': {
          for (let i in mapSpots) {
            for (let a in mapSpots[i]) {
              if (divRefs.current[i][a]?.innerHTML === '<div class="persona"><img src="./char.png"></div>' && mapSpots[+i + 1][a] === 1) {
                console.log(mapSpots[+i + 1][a])
                divRefs.current[i][a].innerHTML = ''
                divRefs.current[+i + 1][a].innerHTML = '<div class="persona"><img src="./char.png"/></div>'
                stop = true
                break;
              }
            }
            if (stop) {
              break
            }
          }
          setMove('-0px')
          break;
        }

        case 'a': {
          for (let i in mapSpots) {
            for (let a in mapSpots[i]) {
              if (divRefs.current[i][a]?.innerHTML === '<div class="persona"><img src="./char.png"></div>' && mapSpots[i][+a - 1] === 1) {
                console.log(divRefs.current[i][a])
                divRefs.current[i][a].innerHTML = ''
                divRefs.current[i][+a - 1].innerHTML = '<div class="persona"><img src="./char.png"/></div>'
                stop = true
                break;
              }
            }
          }
          setMove('-30px')
          break;
        }
        case 'd': {
          for (let i in mapSpots) {
            for (let a in mapSpots[i]) {
              if (divRefs.current[i][a]?.innerHTML === '<div class="persona"><img src="./char.png"></div>' && mapSpots[i][+a + 1] === 1) {
                console.log(divRefs.current[i][a])
                divRefs.current[i][a].innerHTML = ''
                divRefs.current[i][+a + 1].innerHTML = '<div class="persona"><img src="./char.png"/></div>'
                stop = true
                break;
              }
            }
          }
          setMove('-60px')
          break;
        }
      }
    }, 300);
    return () => clearTimeout(time)
  }
  useEffect(() => {
    var stop = false
    for (let i in mapSpots) {
      for (let a in mapSpots[i]) {
        if (mapSpots[i][a] === 1) {
          divRefs.current[i][a].innerHTML = '<div class="persona"><img src="./char.png"/></div>'
          stop = true
          break;
        }
      }
      if (stop) {
        break
      }
    }
  }, [])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => handleKeyPress(event);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [move]);

  return (
    <Father valor={move}>

      {mapSpots.map((row, rowIndex) => (
        row.map((spot, columnIndex) => (
          <div
            key={`${rowIndex}-${columnIndex}`}
            ref={(ref) => {
              if (ref) divRefs.current[rowIndex][columnIndex] = ref;
            }}
            className={'a' + spot.toString()}
          >
          </div>
        ))
      ))}
    </Father>
  );
}
