import {
	FaWindows,
	FaPlaystation,
	FaApple,
	FaAndroid,
	FaLinux,
	FaXbox,
} from 'react-icons/fa';

import {
	SiNintendo,
	SiSega,
	SiAtari,
	SiCommodore,
	SiIos,
} from 'react-icons/si';

export default function PlatformsLogo({ platform }) {
	const handlePlatformLogo = (platformName) => {
		return platformName == 'PC' ? (
			<FaWindows />
		) : platformName == 'PlayStation' ? (
			<FaPlaystation />
		) : platformName == 'Xbox' ? (
			<FaXbox />
		) : platformName == 'Linux' ? (
			<FaLinux />
		) : platformName == 'Nintendo' ? (
			<SiNintendo />
		) : platformName == 'Atari' ? (
			<SiAtari />
		) : platformName == 'Sega' ? (
			<SiSega />
		) : platformName == 'iOS' ? (
			<SiIos />
		) : platformName == 'Commodore' || platformName == 'Commodore / Amiga' ? (
			<SiCommodore />
		) : platformName == 'Apple' || platformName == 'Apple Macintosh' ? (
			<FaApple />
		) : platformName == 'Android' ? (
			<FaAndroid />
		) : null;
    };

	return (
		<>
			{handlePlatformLogo(platform)}
		</>
	);
}
