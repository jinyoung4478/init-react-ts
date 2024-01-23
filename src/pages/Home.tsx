import { Tooltip } from '@/components/Tooltip';

export default function Home() {
  return (
    <div>
      <Tooltip>
        <div className="absolute -bottom-8 left-0 bg-blue-200">This is tooltip</div>
      </Tooltip>
    </div>
  );
}
