import { Tooltip } from '@/components/Tooltip';
import { Link } from '@/components/Link';

export default function Home() {
  return (
    <div>
      <Tooltip>
        <div className="absolute -bottom-8 left-0 bg-blue-200">This is tooltip</div>
      </Tooltip>
      <Link to={'/test'} state={{ dfs: 'fads' }} label="Go to test page" />
    </div>
  );
}
