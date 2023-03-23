import { useState } from 'react';

import './index.less';

export default function Hello() {
  const [count, setCount] = useState<number>(0);
  const onClick = () => setCount(prev => prev + 1);

  return (
    <div
      className="hello-world"
      onClick={onClick}
      style={{ fontSize: 24, color: 'red' }}
    >
      hello world! {count}
    </div>
  );
}
