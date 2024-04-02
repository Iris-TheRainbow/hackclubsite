import {Box, Divider, Flex, Heading, Image, Paragraph} from "theme-ui";
import {Link} from "theme-ui";
import React, {useContext} from "react";
import {OBJECT} from "swr/_internal";

function trim(str) {
    return str.substring(1, str.length - 1)
}

const onboardContext = React.createContext({})

const Item = ({ title, author_name, author_slack, image, project }) => {
    //const { projectCtx, setProjectCtx } = React.useContext(onboardContext)
    return (
        <Box
            sx={{
                bg: '#ffffff',
                color: 'black',
                borderRadius: 8,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                p: 4,
                mt: 4,
                position: 'relative'
            }}
        >
            <Flex
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <object
                    data={image}
                    type={'image/svg+xml'}
                    style={{
                        width: '100%',
                        borderRadius: '8px'
                    }}
                ></object>
                <Link
                    href={`/onboard/board/${project.project_name}`}
                    sx={{
                        textDecoration: 'none',
                        color: 'black',
                        ':hover': {
                            color: 'primary'
                        }
                    }}
                >
                    <Heading
                        as="h2"
                        //variant="title"
                        sx={{
                            textAlign: 'center',
                            mt: 3
                        }}
                    >
                        {title}
                    </Heading>
                </Link>
                <Paragraph
                    sx={{
                        textAlign: 'center',
                        mt: 2,
                        wordBreak: 'break-word'
                    }}
                >
                    {`${author_name ? `by ${trim(author_name)}` : ""} ${author_slack ? `(${trim(author_slack)})` : ""}`}
                </Paragraph>
            </Flex>
        </Box>
    )
}

export default Item;
export { onboardContext };