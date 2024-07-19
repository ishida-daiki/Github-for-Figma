import React from "react";
import { BaseStyles, Button, ThemeProvider } from "@primer/react";
import {
  UploadIcon,
  DownloadIcon,
  GitBranchIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";
import { render } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h, RefObject } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import styles from "./styles.css";
import { InsertCodeHandler } from "./types";

import "@primer/primitives/dist/css/base/size/size.css";
import "@primer/primitives/dist/css/base/typography/typography.css";
import "@primer/primitives/dist/css/functional/size/border.css";
import "@primer/primitives/dist/css/functional/size/breakpoints.css";
import "@primer/primitives/dist/css/functional/size/size-coarse.css";
import "@primer/primitives/dist/css/functional/size/size-fine.css";
import "@primer/primitives/dist/css/functional/size/size.css";
import "@primer/primitives/dist/css/functional/size/viewport.css";
import "@primer/primitives/dist/css/functional/typography/typography.css";
import "@primer/primitives/dist/css/functional/themes/light.css";
import "@primer/primitives/dist/css/functional/themes/light-tritanopia.css";
import "@primer/primitives/dist/css/functional/themes/light-high-contrast.css";
import "@primer/primitives/dist/css/functional/themes/light-colorblind.css";
import "@primer/primitives/dist/css/functional/themes/dark.css";
import "@primer/primitives/dist/css/functional/themes/dark-colorblind.css";
import "@primer/primitives/dist/css/functional/themes/dark-dimmed.css";
import "@primer/primitives/dist/css/functional/themes/dark-high-contrast.css";
import "@primer/primitives/dist/css/functional/themes/dark-tritanopia.css";

function Plugin() {
  return (
    <ThemeProvider colorMode={"auto"}>
      <BaseStyles>
        <div style={{display: 'flex'}}>
          <Button leadingVisual={GitBranchIcon} trailingAction={TriangleDownIcon}>
            main
          </Button>
          <div className={styles.IconButton}>
            <UploadIcon/>
          </div>
          <div className={styles.IconButton}>
            <DownloadIcon />
          </div>
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default render(Plugin);
