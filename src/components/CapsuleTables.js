const CapsuleTables = ({ item }) => {
    return (
        <table className="w-10/12 table-auto border-separate border-spacing-2 border-slate-500 bg-red">
            <thead>
                <tr>
                    <th className="border-2 border-2 border-slate-600 text-center">Serial</th>
                    <th className="border-2 border-2 border-slate-600 text-center">Id</th>
                    <th className="border-2 border-2 border-slate-600 text-center">Reused</th>
                    <th className="border-2 border-2 border-slate-600 text-center">Missions</th>
                    <th className="border-2 border-2 border-slate-600 text-center">Landings</th>
                    <th className="border-2 border-2 border-slate-600 text-center">Status</th>
                    <th className="border-2 border-2 border-slate-600 text-center">Description</th>
                </tr>
            </thead>
            <tbody>
                {item?.map((item) => (
                    <tr>
                        <td className="border-2 border-2 border-slate-600 text-center">{item.capsule_serial}</td>
                        <td className="border-2 border-2 border-slate-600 text-center">{item.capsule_id}</td>
                        <td className="border-2 border-2 border-slate-600 text-center">{item.reuse_count}</td>
                        <td className="border-2 border-2 border-slate-600 text-center">{item.missions.length}</td>
                        <td className="border-2 border-2 border-slate-600 text-center">{item.landings}</td>
                        <td className="border-2 border-2 border-slate-600 text-center">{item.status}</td>
                        <td className="border-2 border-2 border-slate-600 text-center">{item.details}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

export default CapsuleTables