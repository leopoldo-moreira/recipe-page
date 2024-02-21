import styles from './List.module.css'
//import { useState } from 'react'

function List({ ordenedList, arrayText }) {



    const needFormat = (text) => {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === "*") { return true }
        }
        return false
    }

    const formatText = (text) => {
        let boldController = 0
        let toBold = ''
        let notBold = ''

        //if dont need format on text
        if (!needFormat(text)) {
            return [toBold, notBold = text]
        }

        for (let i = 0; i < text.length; i++) {
            if (text[i] === '*') { boldController++ }
            //to bold
            if (boldController === 1 && text[i] !== '*') {
                toBold += text[i]
            }
            //not to bold
            if (boldController === 2 && text[i] !== '*') {
                notBold += text[i]
            }
            if (boldController === 0) {
                notBold += text[i]
            }
        }
        return [toBold, notBold]
    }

    return (
        <div>
            {
            ordenedList &&
                <ol className={styles.list}>
                    {arrayText.map((item, indice) => (
                        <li key={indice}>
                            <b>{formatText(item)[0]}</b>
                            {formatText(item)[1]}
                        </li>
                    ))}
                </ol>
            }

            {
            !ordenedList &&
                <ul className={`${styles.list} ${styles.notOrdened}`}>
                    {arrayText.map((item, indice) => (
                        <li key={indice}>
                            <b>{formatText(item)[0]}</b>
                            {formatText(item)[1]}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default List