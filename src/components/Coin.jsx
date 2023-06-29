import { currencyFormat } from "../utils";
import { TrendingDown } from "../icons/icons";
import { TrendingUp } from "../icons/icons";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="h-20 grid shadow-[0_4px_10px_1px_rgb(0,0,255,0.1)] grid-cols-3 sm:grid-cols-4 font-light p-2 rounded-lg hover:bg-purple-50">
        <div className="flex items-center gap-1 w-full">
          <img className="w-6 m-2" src={coin.image} alt={coin.name} />
          <p className="font-bold">{coin.name}</p>
          <span className="text-xs">({coin.symbol})</span>
        </div>
        <span className="w-full flex text-center items-center justify-center">
          {currencyFormat(coin.current_price)}
        </span>
        <span
          className={`flex gap-1 items-center justify-center ${
            coin.price_change_percentage_24h < 0
              ? "text-red-400"
              : "text-green-400"
          }`}
        >
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
          {coin.price_change_percentage_24h}
        </span>
        <div className="flex items-center justify-center">
          <div className="hidden sm:block">
            <p className="font-semibold">Market Cap</p>
            <span>{currencyFormat(coin.market_cap)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
