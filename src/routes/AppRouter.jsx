import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const NotFound = () => <h1>404: Not Found</h1>;

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="404" element={<NotFound />} />
                {/* RUTAS PROPIAS */}
                <Route path="home" element={<Home />} />
            </Routes>
        </>
    );
}

export default AppRouter;