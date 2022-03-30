export default function auth({ next, store }) {
    if (!store.state.auth.authenticated) {
        return next({
            name: "main",
        });
    }
    return next();
}
