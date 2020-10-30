import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager,
} from "@chakra-ui/core"

export function SSRTheme({ cookies, children }) {
    const colorModeManager = typeof cookies === "string"
        ? cookieStorageManager(cookies)
        : localStorageManager

    return (
        <ChakraProvider colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

export function getServerSideProps({ req }) {
    return {
        props: {
            cookies: req.headers.cookie ?? "",
        },
    }
}