import { useState } from 'react';

// Import components for different views
import AuthMethodsView from '../components/auth/AuthMethodsView';
import EmailLoginForm from '../components/auth/EmailLoginForm';
import EmailRegisterForm from '../components/auth/EmailRegisterForm';

// Consts for different views in the right side of the screen
const VIEWS = {
  START: 'START',
  LOGIN_METHODS: 'LOGIN_METHODS',
  LOGIN_FORM: 'LOGIN_FORM',
  REGISTER_FORM: 'REGISTER_FORM',
};

export default function AuthLayout() {
    const [currentView, setCurrentView] = useState(VIEWS.START);

    const renderContent = () => {
        switch (currentView) {
            case VIEWS.START:
           return (
            <div className="flex flex-col gap-4 w-64">
                <button onClick={() => setCurrentView(VIEWS.LOGIN_METHODS)}>Log In</button>
                <button onClick={() => setCurrentView(VIEWS.REGISTER_FORM)}>Register</button>
            </div>
        );     
        case VIEWS.LOGIN_METHODS:
            return <AuthMethodsView onEmailClick={() => setCurrentView(VIEWS.LOGIN_FORM)} />;
        case VIEWS.LOGIN_FORM:
            return <EmailLoginForm onBack={() => setCurrentView(VIEWS.LOGIN_METHODS)} />;
        case VIEWS.REGISTER_FORM:
            return <EmailRegisterForm onBack={() => setCurrentView(VIEWS.START)} />;
        default:
            return null;
        }   
    }
    return (
        <div className="flex h-screen bg-[#1a1c23] text-white">{/* Left side of screen: Static (Here goes Logo) */}
        <div className="flex-1 flex flex-col justify-center items-center border-r border-gray-600">
            <img src="/logo.png" alt="GameLib Logo" className="w-48 mb-8" />
            <h1 className="text-5xl font-bold mt-4 text-[#a3e6d7]">GameLib</h1>
        </div>

        {/* Right side of screen: Dynamic (Here goes Login/Register forms) */}
        <div className="flex-1 flex justify-center items-center">
            {renderContent()}
        </div>

        </div>
    );
}