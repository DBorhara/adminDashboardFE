export default function WidgetLg() {
  const Button = ({ type }: { type: string }) => {
    switch (type) {
      case "Approved":
        return (
          <button className="py-1.5 px-2 rounded-xl bg-green-100 text-green-500">
            {type}
          </button>
        );
      case "Declined":
        return (
          <button className={"py-1.5 px-2 rounded-xl bg-red-100 text-red-500"}>
            {type}
          </button>
        );
      case "Pending":
        return (
          <button
            className={"py-1.5 px-2 rounded-xl bg-blue-100 text-blue-500"}
          >
            {type}
          </button>
        );
      default:
        break;
    }
  };

  return (
    <div className="flex-2 shadow-featuredInfoBoxShadow p-5">
      <h3 className="text-2xl font-semibold">Latest Transactions</h3>
      <table className="w-full">
        <thead className="tr">
          <tr>
            <th className="text-left py-4">Customer</th>
            <th className="text-left py-4">Date</th>
            <th className="text-left py-4">Amount</th>
            <th className="text-left py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr">
            <td className="flex items-center font-semibold">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
                alt="Customer Image"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="font-light">2 Jun 2021</td>
            <td className="font-light">$122.00</td>
            <td className="Status">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="tr">
            <td className="flex items-center font-semibold">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
                alt="Customer Image"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="font-light">2 Jun 2021</td>
            <td className="font-light">$122.00</td>
            <td className="Status">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="tr">
            <td className="flex items-center font-semibold">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
                alt="Customer Image"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="font-light">2 Jun 2021</td>
            <td className="font-light">$122.00</td>
            <td className="Status">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="tr">
            <td className="flex items-center font-semibold">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
                alt="Customer Image"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="font-light">2 Jun 2021</td>
            <td className="font-light">$122.00</td>
            <td className="Status">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
