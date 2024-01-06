export default function Card({ children }) {
  return (
    <div className="flex-col bg-white rounded-2xl shadow-lg m-3 hover:bg-gray-100">
      {children}
    </div>
  );
}
