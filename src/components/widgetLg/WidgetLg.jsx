import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user (transaction)"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Philippa Langley</span>
          </td>
          <td className="widgetLgDate">07/08/2021</td>
          <td className="widgetLgAmount">£122.99</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user (transaction)"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Philippa Langley</span>
          </td>
          <td className="widgetLgDate">06/08/2021</td>
          <td className="widgetLgAmount">£167.99</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user (transaction)"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Philippa Langley</span>
          </td>
          <td className="widgetLgDate">05/08/2021</td>
          <td className="widgetLgAmount">£519.99</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="user (transaction)"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Philippa Langley</span>
          </td>
          <td className="widgetLgDate">04/08/2021</td>
          <td className="widgetLgAmount">£49.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}