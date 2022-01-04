import './Modal.css'

function TablelUI(props) {

    function getHeaderData() {

        return props;
    }

    function TableHeader(items) {
        const header = items.map((item, index) => {
            const content = <th key={index}>{item}</th>
            return content
        })
        return <tr>{header}</tr>
    }

    function TableBody(items) {
        const body = items.map((item, index) => {
            const content = <tr key={index}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.date}</td>
                <td>{item.order}</td>
            </tr>
            return content
        })
        return body
    }
    function Tablefoot(items) {

    }

    return (
        <div >

        </div>
    );

}

export default TablelUI;
