const CapsuleTables = ({ item }) => {
    return (
        <table class="w-10/12 table-auto border-separate border-spacing-2 border-slate-500 bg-red">
            <thead>
                <tr>
                    <th className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">Serial</th>
                    <th className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">Id</th>
                    <th className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">Reused</th>
                    <th className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">Missions</th>
                    <th className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">Landings</th>
                    <th className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">Status</th>
                    <th className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">Description</th>
                </tr>
            </thead>
            <tbody>
                {item.map((item) => (
                    <tr>
                        <td className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">{item.capsule_serial}</td>
                        <td className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">{item.capsule_id}</td>
                        <td className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">{item.reuse_count}</td>
                        <td className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">{item.missions.length}</td>
                        <td className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">{item.landings}</td>
                        <td className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">{item.status}</td>
                        <td className="border-l-2 border-b-2 border-b-slate-600 border-l-slate-600">{item.details}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

export default CapsuleTables