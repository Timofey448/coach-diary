<template>
    <button class="button">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
	padding-top: 10px;
	padding-bottom: 10px;
    width: 100%;
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
	border: none;
    border-radius: 8px;
	color: #FFFFFF;
    background-color: $mainColor;
	cursor: pointer;
	transition: color 0.3s ease-out, background-color 0.3s ease-out;

	&:hover {
		background-color: $mainColorHovered;
	}
}
</style>
