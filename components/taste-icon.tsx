import Vectors from './vectors';

export const TasteIcon = ({ note }) => {
	const Icon = {
		vanilla: <Vectors.Vanilla />,
		honey: <Vectors.Honey />,
		peppercorn: <Vectors.Peppercorn />,
		'banana peel': <Vectors.BananaPeel />,
	};
	return <>{Icon[note]}</>;
};
