import { dynamicComponent, PATH_MAP } from '../../components/dynamicComponent'

const Component = ({ componentName }) => {
    return <div>{dynamicComponent(componentName)}</div>
}

export const getStaticProps = async (context) => {
    const {
        params: { componentName },
    } = context

    return {
        props: {
            componentName,
        },
    }
}

export async function getStaticPaths() {
    const componentNames = []
    Object.keys(PATH_MAP).forEach((componentName) => componentNames.push({ params: { componentName }}))

    return {
        paths: componentNames,
        fallback: false,
    }
}

export default Component
