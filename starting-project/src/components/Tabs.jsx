export default function Tab({children, button, ButtonContainer}) {
    return (
        <>
            <ButtonContainer>{button}</ButtonContainer>
            {children}
        </>
    )
}