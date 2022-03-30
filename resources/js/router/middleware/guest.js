export default function guest({ next, store }) {
    if (store.state.auth.authenticated) {
        return next({
            name: "hrd",
        });
    }

    return next();
}
