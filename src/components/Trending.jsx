import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";

const Trending = () => {
  const { response } = useAxios("search/trending");

  return (
    <div className="mt-8 wrapper-container">
      <h1 className="text-2xl mb-6 font-bold tracking-tight text-[#111827] sm:text-4xl">
        Trending
      </h1>
      {response &&
        response.coins.map((coin) => (
          <CoinTrending key={coin.item.coin_id} coin={coin.item} />
        ))}
    </div>
  );
};

export default Trending;
