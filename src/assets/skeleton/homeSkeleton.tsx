import ContentLoader from "react-content-loader"

const HomeSkeleton = (props: any) => (
    <ContentLoader

        width={800}
        height={550}
        viewBox="0 0 800 575"
        backgroundColor="#df3cdfcc"
        foregroundColor="#ecebeb"
        {...props}
    >

        <rect x="30" y="58" rx="2" ry="2" width="740" height="500" />
        {/* <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
        <rect x="467" y="56" rx="2" ry="2" width="211" height="211" /> */}


    </ContentLoader>
)

export default HomeSkeleton