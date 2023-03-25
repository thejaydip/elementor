import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const FileReportIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M6 3.75C5.66848 3.75 5.35054 3.8817 5.11612 4.11612C4.8817 4.35054 4.75 4.66848 4.75 5V19C4.75 19.3315 4.8817 19.6495 5.11612 19.8839C5.35054 20.1183 5.66848 20.25 6 20.25H13C13.4142 20.25 13.75 20.5858 13.75 21C13.75 21.4142 13.4142 21.75 13 21.75H6C5.27065 21.75 4.57118 21.4603 4.05546 20.9445C3.53973 20.4288 3.25 19.7293 3.25 19V5C3.25 4.27065 3.53973 3.57118 4.05546 3.05546C4.57118 2.53973 5.27065 2.25 6 2.25H13C13.1989 2.25 13.3897 2.32902 13.5303 2.46967L18.5303 7.46967C18.671 7.61032 18.75 7.80109 18.75 8V11C18.75 11.4142 18.4142 11.75 18 11.75C17.5858 11.75 17.25 11.4142 17.25 11V8.75H14C13.5359 8.75 13.0908 8.56563 12.7626 8.23744C12.4344 7.90925 12.25 7.46413 12.25 7V3.75H6ZM13.75 4.81066L16.1893 7.25H14C13.9337 7.25 13.8701 7.22366 13.8232 7.17678C13.7763 7.12989 13.75 7.0663 13.75 7V4.81066ZM18.5 14.75C16.9812 14.75 15.75 15.9812 15.75 17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75ZM14.25 17.5C14.25 15.1528 16.1528 13.25 18.5 13.25C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5ZM18.1111 15.5833C18.5253 15.5833 18.8611 15.9191 18.8611 16.3333V17.1389H19.6667C20.0809 17.1389 20.4167 17.4747 20.4167 17.8889C20.4167 18.3031 20.0809 18.6389 19.6667 18.6389H18.1111C17.6969 18.6389 17.3611 18.3031 17.3611 17.8889V16.3333C17.3611 15.9191 17.6969 15.5833 18.1111 15.5833Z" />
		</SvgIcon>
	);
} );

export default FileReportIcon;
