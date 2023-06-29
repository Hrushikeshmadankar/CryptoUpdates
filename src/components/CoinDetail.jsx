import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}`);
  console.log(response);

  if (!response) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-6">
      {/* Heading */}
      <div className="shadow-[0_4px_10px_1px_rgb(0,0,255,0.1)] rounded-lg h-20 flex items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          <img src={response.image.small} alt={response.name} />
          <h1 className="text-2xl mb-2 capitalize font-bold text-4xl">
            {response.name}
          </h1>
          <div className="bg-blue-400 h-8 text-center p-1 rounded text-white text-sm font-semibold">
            <p>Rank #{response.market_cap_rank}</p>
          </div>
        </div>
      </div>

      {/* Prices */}
      <div>
        <table className="w-full mt-10 mb-10">
          <thead>
            <tr className="flex justify-between gap-4">
              <th className="flex-auto shadow-md shadow-orange-500/10 rounded-lg h-20 flex items-center justify-center text-3xl">
                $ {response.market_data.current_price.usd}
              </th>
              <th className="flex-auto shadow-md shadow-orange-500/10 rounded-lg h-20 flex items-center justify-center text-3xl">
                Rs {response.market_data.current_price.inr}
              </th>
              <th className="flex-auto shadow-md shadow-orange-500/10 rounded-lg h-20 flex items-center justify-center text-3xl">
                € {response.market_data.current_price.eur}
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Variations */}
      <div className="p-4 rounded-lg shadow-md shadow-orange-500/10 mb-10">
        <table className="w-full">
          <thead>
            <tr className="gap-4">
              <th className="py-2 shadow-md shadow-orange-500/10 rounded-lg">
                1hr
              </th>
              <th className="py-2 shadow-md shadow-orange-500/10 rounded-lg">
                24hr
              </th>
              <th className="py-2 shadow-md shadow-orange-500/10 rounded-lg">
                7d
              </th>
              <th className="py-2 shadow-md shadow-orange-500/10 rounded-lg">
                14d
              </th>
              <th className="py-2 shadow-md shadow-orange-500/10 rounded-lg">
                30d
              </th>
              <th className="py-2 shadow-md shadow-orange-500/10 rounded-lg">
                1yr
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-center pt-6">
                {response.market_data.price_change_percentage_1h_in_currency.usd?.toFixed(
                  2
                )}
                %
              </td>
              <td className="py-2 text-center pt-6">
                {response.market_data.price_change_percentage_24h_in_currency.usd?.toFixed(
                  2
                )}
                %
              </td>
              <td className="py-2 text-center pt-6">
                {response.market_data.price_change_percentage_7d_in_currency.usd?.toFixed(
                  2
                )}
                %
              </td>
              <td className="py-2 text-center pt-6">
                {response.market_data.price_change_percentage_14d_in_currency.usd?.toFixed(
                  2
                )}
                %
              </td>
              <td className="py-2 text-center pt-6">
                {response.market_data.price_change_percentage_30d_in_currency.usd?.toFixed(
                  2
                )}
                %
              </td>
              <td className="py-2 text-center pt-6">
                {response.market_data.price_change_percentage_1y_in_currency.usd?.toFixed(
                  2
                )}
                %
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Stats */}

      <div className="flex shadow-[0_0px_10px_1px_rgb(0,0,255,0.1)] rounded-lg h-30 flex items-center justify-center mb-20 p-4">
        <div className="w-1/2 p-4 pt-0 pb-0 flex flex-wrap text-center">
          <div className="w-full border-b-2 flex items-center p-3">
            <h2 className="text-md font-bold">24 hr low: </h2>
            <p className="ml-auto">$ {response.market_data.low_24h.usd}</p>
          </div>
          <div className="w-full border-b-2 flex items-center p-3">
            <h2 className="text-md font-bold">24 hr high: </h2>
            <p className="ml-auto">$ {response.market_data.high_24h.usd}</p>
          </div>
        </div>

        <div className="w-1/2 p-4 flex flex-wrap text-center">
          <div className="w-full border-b-2 flex items-center p-3">
            <h2 className="text-md font-bold">Market Cap: </h2>
            <p className="ml-auto">$ {response.market_data.market_cap.usd}</p>
          </div>
          <div className="w-full border-b-2 flex items-center p-3">
            <h2 className="text-md font-bold">Circulating Supply: </h2>
            <p className="ml-auto">{response.market_data.circulating_supply}</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div>
        <h1 className="text-lg font-bold">About</h1>
        <p
          className="mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline"
          dangerouslySetInnerHTML={{ __html: response.description.en }}
        ></p>
      </div>
    </div>
  );
};

export default CoinDetail;
