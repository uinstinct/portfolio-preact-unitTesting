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

export function getStaticProps({ req }) {
    return {
        props: {
            cookies: (req && req.headers && req.headers.cookie) ?? "",
        },
    }
}