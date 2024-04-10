import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import SignInModal from "../Modals/SignInModal";
import SignUpModal from "../Modals/SignUpModal copy";

function Header() {
    return (
    <header className="flex flex-row justify-between">
        <h1 className="text-3xl"> <HighlightIcon /> Notes Keeper</h1>
        <ul className="flex flex-row space-x-4">
            <li>
                <SignInModal />
            </li>
            <li>
                <SignUpModal />
            </li>
        </ul>
    </header>
    );
}

export default Header;