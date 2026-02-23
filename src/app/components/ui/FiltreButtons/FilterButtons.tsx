// import { Button } from '@/app/components/ui/button';


export function FilterButton( { name, onClick } ) {
    return (
        <> 
            <button onClick={onClick}>{name}</button>
        </>
    )
}