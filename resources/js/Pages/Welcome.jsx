import { Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <h1>MultiCambios</h1>
            </div>
        </>
    );
}
