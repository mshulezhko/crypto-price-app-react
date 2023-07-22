

export default function Coin(props) {
    const {
        name,
        icon,
        price,
        symbol,
        twitterUrl
    } = props


    return <div className="coinBlock">
        <div>Name: {name}</div>
        <img src={icon} alt={name} />
        <div>Price: {price}</div>
        <div>Symbol: {symbol}</div>
        <div><a href={twitterUrl} target='_blank' rel="noreferrer">Twiter</a></div>
    </div>

}