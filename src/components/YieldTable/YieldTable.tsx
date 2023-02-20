import React from "react";

type Props = {
  yields: any;
}

const YieldTable: React.FC<Props> = ({ yields })  => {

  return (
    <div className="h-[200px] overflow-y-auto">
      <table className="table-fixed w-full text-left">
        <thead>
          <tr className="border-b border-[#e5e7eb6b]">
            <th className="whitespace-nowrap overflow-hidden text-ellipsis p-2">Stable Coin</th>
            <th className="whitespace-nowrap overflow-hidden text-ellipsis p-2">Provider</th>
            <th className="whitespace-nowrap overflow-hidden text-ellipsis p-2">Chain</th>
            <th className="whitespace-nowrap overflow-hidden text-ellipsis p-2">APY</th>
          </tr>
        </thead>
        <tbody>
          {yields.map((yieldData: any, index: number) => (
            <tr key={index}>
              <td className="whitespace-nowrap overflow-hidden text-ellipsis p-2">{yieldData.poolMeta ? yieldData.poolMeta : yieldData.symbol}</td>
              <td className="whitespace-nowrap overflow-hidden text-ellipsis p-2">{yieldData.project}</td>
              <td className="whitespace-nowrap overflow-hidden text-ellipsis p-2">{yieldData.chain}</td>
              <td className="whitespace-nowrap overflow-hidden text-ellipsis p-2">{yieldData.apyBase.toFixed(2)} %</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YieldTable;