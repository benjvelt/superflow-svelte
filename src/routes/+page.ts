// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { initSuperflow } from '@usesuperflow/client'

initSuperflow('zwNLOmdJnjXJt6eLlbaj', {
    projectId: '8948734731476897'
});

export const prerender = true;
