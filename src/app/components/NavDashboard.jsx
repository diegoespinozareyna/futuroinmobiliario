import Link from "next/link"

function NavDashboard() {
    
    return (
        <div className='flex justify-between'>
            <ul className='flex justify-between gap-4'>
                <li>
                    <Link href={"/dashboard/filtros"}>Filtros</Link>
                </li>
                <li>
                    <Link href={"/dashboard/registrarpropiedad"}>Registrar Prop.</Link>
                </li>
                <li>
                    <Link href={"/auth/register"}>Calendario</Link>
                </li>
                <li>
                    <Link href={"/dashboard/mapa"}>Mapa</Link>
                </li>
            </ul>

        </div>
    )
}

export default NavDashboard