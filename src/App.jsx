import { useStocks } from './hooks/useStocks';

function App() {
  const { data, isLoading, isError } = useStocks('AAPL');

  if (isLoading) return <div className="p-10 text-white">Loading market data...</div>;
  if (isError) return <div className="p-10 text-red-500">Error loading data.</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-emerald-400">FinTrack</h1>
      
      <div className="grid gap-4">
        {data && data.map((item, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-xl font-mono">{item.symbol}</span>
              <span className="text-2xl font-bold">${item.close}</span>
            </div>
            <p className="text-slate-500 text-sm mt-2">
              Date: {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
