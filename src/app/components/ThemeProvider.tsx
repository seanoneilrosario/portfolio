const ThemePrivoder = () => {
    const themeColor = localStorage.getItem('themeProvides');
    return (
        <div>
            {themeColor}
        </div>
    )
}

export default ThemePrivoder;