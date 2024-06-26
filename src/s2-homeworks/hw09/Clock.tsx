import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        const id = window.setInterval(() => setDate(new Date()), 1000)
        console.log(id)
        setTimerId(id)
    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timerId)
        setTimerId(undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(!show)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(!show)
    }

    const hours = date.getHours() < 10 ? `0${date.getHours()}`: `${date.getHours()}`
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}`: `${date.getMinutes()}`
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}`: `${date.getSeconds()}`
    const day = date.getDate() < 10 ? `0${date.getDate()}`: `${date.getDate()}`
    const monthNumber = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: `${date.getMonth() + 1}`
    const year = date.getFullYear() < 10 ? `0${date.getFullYear()}`: `${date.getFullYear()}`

    const stringTime = `${hours}:${minutes}:${seconds} ` || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = `${day}.${monthNumber}.${year}` || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    console.log(stringDate)
    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const formatterWeekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long"
    })
    const weekDay = formatterWeekday.format(date)

    const formatterMonth = new Intl.DateTimeFormat("en-US", {
        month: "long"
    })
    const month = formatterMonth.format(date)

    const stringDay = weekDay || <br/> // пишут студенты
    const stringMonth = month || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
