function OutfitMaker({ models, top, bottom, dress }) {
    const model = models.map(model => model)

    const dressClassName = (name) => {
        if (name === 'Tropical Dress') {
            return 'position-tropical-dress'
        } else if (name === 'Black Mini Dress') {
            return 'position-black-dress'
        } else if (name === 'White Dress') {
            return 'position-white-dress'
        } else if (name === 'Leaf Dress') {
            return 'position-leaf-dress'
        } else if (name === 'Sequin Dress') {
            return 'position-sequin-dress'
        } else if (name === 'Flower Dress') {
            return 'position-flower-dress'
        } else if (name === 'Blue Maxi') {
            return 'position-blue-maxi'
        } else if (name === 'White Belt Dress') {
            return 'position-white-belt-dress'
        } else if (name === 'Pink Cardigan') {
            return 'position-pink-cardi'
        } else if (name === 'Tribal Dress') {
            return 'position-tribal-dress'
        } else if (name === 'Plaid Dress') {
            return 'position-plaid-dress'
        } else if (name === 'Puff Sleeve Dress') {
            return 'position-puffsleeve-dress'
        } else if (name === 'Blue Mini Dress') {
            return 'position-blue-mini'
        }
    }

    const topClassName = (name) => {
        if (name === 'Blue Crop Top') {
            return 'position-blue-top'
        } else if (name === 'White Crop Top') {
            return 'position-white-top'
        } else if (name === 'White Top') {
            return 'position-knot-top'
        } else if (name === 'Button Crop') {
            return 'position-button-crop'
        } else if (name === 'V Shirt') {
            return 'position-v-shirt'
        } else if (name === 'Black Bodysuit') {
            return 'position-black-body'
        } else if (name === 'Blue Crop') {
            return 'position-blue-crop'
        } else if (name === 'Logo Top') {
            return 'position-logo-top'
        } else if (name === 'Silk Top') {
            return 'position-silk-top'
        } else if (name === 'BW Crop Top') {
            return 'position-bw-crop'
        } else if (name === 'Polka Dot Top') {
            return 'position-polkadot-top'
        } else if (name === 'Cutout Top') {
            return 'position-cutout-top'
        } else if (name === 'Orange Bodysuit') {
            return 'position-orange-body'
        } else if (name === 'Linen Top') {
            return 'position-linen-top'
        } else if (name === 'Pink Cardigan') {
            return 'position-pink-cardi'
        }
    }

    const bottomClassName = (name) => {
        if (name === 'Pink Pencil Skirt') {
            return 'position-pencil-skirt'
        } else if (name === 'Jean Shorts') {
            return 'position-jean-shorts'
        } else if (name === 'Asymetrical Tan Skirt') {
            return 'position-tan-skirt'
        } else if (name === 'BW Skirt') {
            return 'position-bw-skirt'
        } else if (name === 'Denim Shorts') {
            return 'position-denim-short'
        } else if (name === 'Blue Skirt') {
            return 'position-blue-skirt'
        } else if (name === 'Orange Shorts') {
            return 'position-orange-short'
        } else if (name === 'Print Pants') {
            return 'position-print-pant'
        } else if (name === 'Wide Leg Pants') {
            return 'position-wideleg-pant'
        } else if (name === 'Green Shorts') {
            return 'position-green-short'
        } else if (name === 'Tiger Pants') {
            return 'position-tiger-pant'
        } else if (name === 'HiLo Skirt') {
            return 'position-hilo-skirt'
        } else if (name === 'Neon Pants') {
            return 'position-neon-pant'
        } else if (name === 'Tiered Skirt') {
            return 'position-tiered-skirt'
        }
    }

    return (
        <div className="outfit-maker">
            <img className={topClassName(top.name)} src={top.image}
                alt={top.name} />
            <img className={bottomClassName(bottom.name)} src={bottom.image}
                alt={bottom.name} />
            <img className={dressClassName(dress.name)} src={dress.image}
                alt={dress.name} />
            <img src={model[0].image} alt={model[0].color}
                style={{ height: "44rem" }} />
        </div>
    )
}

export default OutfitMaker