import { Link } from "react-router-dom";

const CoinTrending = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="flex items-center font-light h-20 shadow-[0_4px_10px_1px_rgb(0,0,255,0.1)] mb-2 p-2 rounded-lg hover:bg-purple-50">
        <div className="flex items-center gap-1">
          <span className="font-semibold ml-2 mr-5">{coin.score + 1}.</span>
          <img className="w-6 m-2" src={coin.small} alt={coin.name} />
          <p className="font-bold">{coin.name}</p>
          <small className="text-xs">({coin.symbol})</small>
        </div>
      </div>
    </Link>
  );
};

export default CoinTrending;
