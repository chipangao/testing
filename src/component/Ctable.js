import { useEffect, useState, useMemo } from 'react';
import './Ctable.css';
function Ctable(props) {

    const data = useMemo(() =>
        [
            {
                name: 'Kim Parrish',
                address: '4420 Valley Street, Garnerville, NY 10923',
                date: '07/11/2020',
                order: '87349585892118',
            },
            {
                name: 'Michele Castillo',
                address: '637 Kyle Street, Fullerton, NE 68638',
                date: '07/11/2020',
                order: '58418278790810',
            },
            {
                name: 'Eric Ferris',
                address: '906 Hart Country Lane, Toccoa, GA 30577',
                date: '07/10/2020',
                order: '81534454080477',
            },
            {
                name: 'Gloria Noble',
                address: '2403 Edgewood Avenue, Fresno, CA 93721',
                date: '07/09/2020',
                order: '20452221703743',
            },
            {
                name: 'Darren Daniels',
                address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
                date: '07/07/2020',
                order: '22906126785176',
            },
            {
                name: 'Ted McDonald',
                address: '796 Bryan Avenue, Minneapolis, MN 55406',
                date: '07/07/2020',
                order: '87574505851064',
            },
        ],
        []
    )

    function getHeaderData() {
        const Theader = ['name', 'address', 'date', 'order']
        return Theader;
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
        <div>
            <div className='table_layout'>
                <button>Header</button>
                <table>
                    <thead>
                        {TableHeader(getHeaderData())}
                    </thead>
                    <tbody>
                        {TableBody(data)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>foot</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div >
    );
}

export default Ctable;
