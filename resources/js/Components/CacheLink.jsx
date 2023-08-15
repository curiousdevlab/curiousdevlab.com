import { Link, router } from '../inertiajsflow/react/index.esm.js';
import { useEffect } from 'react';

const CacheLink = ({ children, isStatic, ...props }) => {
  const staticPage = isStatic ?? false;

  useEffect(() => {
    router.cache().prefetch(props.href, { durationInMinutes: 5, isStatic: staticPage  })
  }, [])

  return <Link isStatic={staticPage} {...props}>{children}</Link>;
}

export default CacheLink;