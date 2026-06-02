import { useEffect } from "react";

function ThemeSwitch({ theme, setTheme }) {

    useEffect(() => {
        // Load theme from Local Storage
        const storedTheme = JSON.parse(localStorage.getItem('theme')) || theme;
        setTheme(storedTheme);
    });

    const handleChange = (event) => {
        let chosenTheme = (event.currentTarget.checked) ? 'dark' : 'light';

        localStorage.setItem('theme', JSON.stringify(chosenTheme));
        setTheme(chosenTheme);
    };

    return <div id="themePicker" className="d-flex">
        <label className="form-check-label" htmlFor="checkNativeSwitch"><i className="bi bi-brightness-high"></i></label>
        <div className="form-switch">
            <input className="form-check-input" type="checkbox" 
                role="switch" id="checkNativeSwitch" 
                checked={(theme === 'dark')} 
                switch={(theme === 'dark').toString()} 
                onChange={handleChange}/>
        </div>
        <label className="form-check-label" htmlFor="checkNativeSwitch"><i className="bi bi-moon-stars"></i></label>
    </div>;
}

export default ThemeSwitch;