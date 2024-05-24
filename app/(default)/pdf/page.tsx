export const metadata = {
    title: 'PDF2Anki',
    description: 'Help you complete immersive language learning.',
}

import PDF2Anki from '@/components/utils/pdf2anki'

export default function PDF() {

    return (
        <>
            <div>
                <PDF2Anki />
            </div>
        </>
    )
}
