import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from './inertiajsflow/react/index.esm.js';
import createServer from './inertiajsflow/react/server.esm.js';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import route from '../../vendor/tightenco/ziggy/dist/index.m';

const appName = 'Curious Dev Lab';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
        setup: ({ App, props }) => {
            global.route = (name, params, absolute) =>
                route(name, params, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });

            return <App {...props} />;
        },
    })
);