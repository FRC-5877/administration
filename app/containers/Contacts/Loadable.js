/**
 *
 * Asynchronously loads the component for Contacts
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
