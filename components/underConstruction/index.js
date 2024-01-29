import Image from 'next/image';

const UnderConstruction = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-auto">
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
