import { Link, router } from '@inertiajs/react';
import { useEffect } from 'react';

const CacheLink = ({ children, isStatic, ...props }) => {
  const staticPage = isStatic ?? false;

  useEffect(() => {
    setTimeout(() => {
      router.cache().prefetch(props.href, { durationInMinutes: 5, isStatic: staticPage  })
    }, [500]);
  }, [])

  return <Link isStatic={staticPage} {...props}>{children}</Link>;
}

export default CacheLink;