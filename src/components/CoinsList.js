import axios from 'axios'
import { useEffect, useState } from 'react'
import '../App.css'
import Coin from './Coin'


export default function CoinsList() {
    const [coinsListArr, setCoinsListArr] = useState([])
    const [filterCoinsArr, setFilterCoinsArr] = useState([])
    const [filterCoinsWord, setFilterCoinsWord] = useState('')
    const url = 'https://api.coinstats.app/public/v1/coins?skip=0'

    function coinsListHandler(response) {
        console.log(response.data.coins)
        setCoinsListArr(response.data.coins)
        setFilterCoinsArr(response.data.coins)

    }

    useEffect(() => {
        axios.get(url).then(coinsListHandler)
    }, [])

    function setFilter() {
        if (filterCoinsWord.length > 0) {
            setFilterCoinsArr(coinsListArr.filter((coin) => {
                return coin.name.toLowerCase().includes(filterCoinsWord.toLowerCase())
            }
            ))
        } else {
            setFilterCoinsArr(coinsListArr)
        }
    }


    return (
        <>
            <div className='cryptoHeader'>
                <input type='text' placeholder='...' onChange={(e) => setFilterCoinsWord(e.target.value)} />
                <button onClick={setFilter}>Search</button>
            </div>
            <div className='cryptoDisplay'>
                {
                    filterCoinsArr.map((coin) => {
                        return <Coin
                            name={coin.name}
                            icon={coin.icon}
                            price={coin.price}
                            symbol={coin.symbol}
                            twitterUrl={coin.twitterUrl} />
                    })
                }
            </div>
        </>)
}