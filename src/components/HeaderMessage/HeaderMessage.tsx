function HeaderMessage({message}: { message: string }) {
    return (
        <div className="header-message">
            <h1>Olá,</h1>
            <p className="header-message_p">{message}</p>
        </div>
    );
}

export default HeaderMessage;