import Image from 'next/image';

const UnderConstruction = () => {
    return (
        <div>
            <Image
                src="/images/UnderConstruction.png"
                alt="Under Construction"
                width={1920}
                height={1080}
            />
        </div>
    );
};

export default UnderConstruction;
